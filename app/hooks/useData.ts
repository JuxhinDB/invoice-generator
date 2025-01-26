import { useGetValue, useItemParams } from "@/app/hooks/useGetValue";

export const useData = () => {
  const yourEmail = useGetValue("yourEmail");
  const yourName = useGetValue("yourName");
  const yourAddress = useGetValue("yourAddress");
  const yourCity = useGetValue("yourCity");
  const yourState = useGetValue("yourState");
  const yourCountry = useGetValue("yourCountry");
  const yourLogo = useGetValue("yourLogo");
  const yourTaxId = useGetValue("yourTaxId");
  const yourZip = useGetValue("yourZip");

  const email = useGetValue("email");
  const companyName = useGetValue("companyName");
  const companyAddress = useGetValue("companyAddress");
  const companyCity = useGetValue("companyCity");
  const companyState = useGetValue("companyState");
  const companyCountry = useGetValue("companyCountry");
  const companyLogo = useGetValue("companyLogo");
  const companyTaxId = useGetValue("companyTaxId");
  const companyZip = useGetValue("companyZip");

  const note = useGetValue("note");
  const items = useItemParams();

  const beneficiaryName = useGetValue("beneficiaryName");
  const iban = useGetValue("iban");
  const bicSwift = useGetValue("bicSwift");
  const bankName = useGetValue("bankName");
  const bankAddress = useGetValue("bankAddress");
  const correspondingBic = useGetValue("correspondingBic");

  const invoiceNumber = useGetValue("invoiceNo");
  const issueDate = useGetValue("issueDate");
  const dueDate = useGetValue("dueDate");

  const currency = useGetValue("currency") || "INR";

  const invoiceTerms = {
    invoiceNumber,
    issueDate,
    dueDate,
  };

  const invoiceDetails = {
    note,
    items,
    currency,
  };

  const paymentDetails = {
    beneficiaryName,
    iban,
    bicSwift,
    bankName,
    bankAddress,
    correspondingBic,
    currency
  };

  const yourDetails = {
    yourName,
    yourAddress,
    yourCity,
    yourState,
    yourCountry,
    yourLogo,
    yourEmail,
    yourTaxId,
    yourZip,
  };

  const companyDetails = {
    companyName,
    companyAddress,
    companyCity,
    companyState,
    companyCountry,
    companyLogo,
    companyTaxId,
    companyZip,
    email,
  };

  return {
    companyDetails,
    yourDetails,
    paymentDetails,
    invoiceTerms,
    invoiceDetails,
  };
};
