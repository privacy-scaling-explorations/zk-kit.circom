pragma circom 2.1.5;

include "bitify.circom";
include "comparators.circom";
include "mux1.circom";
include "safe-comparators.circom";

// Template to determine the most significant bit (MSB) of an input number.
template MSB(n) {
    signal input in;
    signal output out;
   
    // Ensure the input is less than 2^254 within the finite field for BN254.
    assert(in < (2 ** 254));

    // Convert the number to its bit representation.
    var n2b[n];
    n2b = Num2Bits(n)(in);

    // Assign the MSB to the output.
    out <== n2b[n-1];
}

// Template for bit-shifting a dividend and partial remainder.
template Shift(n) {
    // Dividend.
    signal input dividend;
    // Remainder.
    signal input remainder;

    // Shifted dividend.
    signal output outDividend;
    // Partial remainder (updated).
    signal output outRemainder;

    // Determine the MSB of the dividend.
    var lmsb;
    lmsb = MSB(n)(dividend);

    // Shift the dividend.
    outDividend <== dividend - lmsb * 2 ** (n - 1);

    // Update the partial remainder.
    outRemainder <== remainder * 2 + lmsb;
}

// Template for performing integer division.
template IntegerDivision() {
    signal input dividend;
    signal input divisor;
    signal output quotient;
    signal output remainder;
    
    quotient <-- dividend \ divisor;
    remainder <-- dividend % divisor;
    
    // Create a signal for the SafeLessThan result
    signal isLessThan <== SafeLessThan(252)([remainder, divisor]);
    1 === isLessThan;

    // Verify the division
    dividend === divisor * quotient + remainder;
}

// Converts an integer to its floating-point representation by multiplying it with 10^W.
template ToFloat(W) {
    // Assert W to ensure the result is within the range of 2^252.
    assert(W < 75);

    signal input in;

    signal output out;

    // Ensure the input multiplied by 10^W is less than 10^75 to prevent overflow.
    var lt;

    lt = LessEqThan(252)([in, 10 ** (75 - W)]);

    assert(lt == 1);

    // Convert the integer to floating-point by multiplying with 10^W.
    out <== in * (10**W);
}

// Performs division on floating-point numbers represented with W decimal digits.
template DivisionFromFloat(W) {
    // Ensure W is within the valid range for floating-point representation.
    assert(W < 75);

     // Numerator.
    signal input a;
    // Denominator.
    signal input b;
    // Quotient.
    signal output c;

    // Ensure the numerator 'a' is within the range of valid floating-point numbers.
    var lt;

    lt = LessEqThan(252)([a, 10 ** (75 - W)]);

    assert(lt == 1);

    // Use tuple assignment to get both quotient and remainder
    signal quotient;
    (quotient, _) <== IntegerDivision()(a * (10 ** W), b);
    
    // Assign the quotient to the output
    c <== quotient;
}

// Performs division on integers by first converting them to floating-point representation.
template DivisionFromNormal(W) {
     // Numerator.
    signal input a;
    // Denominator.
    signal input b;
    // Quotient.
    signal output c;

    // Convert input to float and perform division.
    c <== DivisionFromFloat(W)(ToFloat(W)(a), ToFloat(W)(b));
}

// Performs multiplication on floating-point numbers and converts the result back to integer form.
template MultiplicationFromFloat(W) {
    // Ensure W is within the valid range for floating-point representation.
    assert(W < 75);

    // Multiplicand.
    signal input a;
    // Multiplier.
    signal input b;
    // Product.
    signal output c;

    // Ensure both inputs 'a' and 'b' are within a valid range for multiplication.
    var lta;
    var ltb;

    lta = LessEqThan(252)([a, 2 ** 126]);
    ltb = LessEqThan(252)([b, 2 ** 126]);

    assert(lta == 1);
    assert(ltb == 1);

    // Perform integer division after multiplication to adjust the result back to W decimal digits.
    signal quotient;
    (quotient, _) <== IntegerDivision()(a * b, 10 ** W);
    c <== quotient;
}

// Performs multiplication on integers by first converting them to floating-point representation.
template MultiplicationFromNormal(W) {
    // Multiplicand.
    signal input a;
    // Multiplier.
    signal input b;
    // Product.
    signal output c;

    // Convert input to float and perform multiplication.
    c <== MultiplicationFromFloat(W)(ToFloat(W)(a), ToFloat(W)(b));
}
