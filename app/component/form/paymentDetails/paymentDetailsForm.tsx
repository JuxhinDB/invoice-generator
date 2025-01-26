import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";

export const PaymentDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Payment Details</p>
    <CustomTextInput
      label="Beneficiary name"
      placeholder="John Doe"
      variableName="beneficiaryName"
    />
    <CustomTextInput
      label="IBAN"
      placeholder="MT00REVOLUT00000000000000000000"
      variableName="iban"
    />
    <CustomTextInput
      label="BIC/SWIFT"
      placeholder="REVOMALTXXX"
      variableName="bicSwift"
    />
    <CustomTextInput
      label="Bank name"
      placeholder="Revolut Bank UAB"
      variableName="bankName"
    />
    <CustomTextInput
      label="Bank address"
      placeholder="Konstitucijos ave. 21B, 08130 Vilnius, Lithuania"
      variableName="bankAddress"
    />
    <CustomTextInput
      label="Corresponding BIC"
      placeholder="REVOMALTXXX"
      variableName="correspondingBic"
    />
  </div>
);
