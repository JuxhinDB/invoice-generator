"use client";

import { Button } from "@/components/ui/button";
import { Document, Font, Page } from "@react-pdf/renderer";
import { CheckCircle2, Download, LoaderIcon } from "lucide-react";
import { PdfDetails } from "../pdfDetails";
import { useData } from "@/app/hooks/useData";
import { pdfContainers } from "@/lib/pdfStyles";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import { svgToDataUri } from "@/lib/svgToDataUri";
import { useEffect, useState } from "react";
import { currencyList } from "@/lib/currency";

export const DownloadInvoiceButton = () => {
  const [status, setStatus] = useState<"downloaded" | "downloading" | "not-downloaded">("not-downloaded");
  const { companyDetails, invoiceDetails, invoiceTerms, paymentDetails, yourDetails } = useData();

  const createPdf = async () => {
    // Get currency details
    const currencyDetails = currencyList.find(
      (c) => c.value.toLowerCase() === invoiceDetails.currency?.toLowerCase()
    )?.details;

    // Get flag SVG
    const data = await fetch(`/flag/1x1/${currencyDetails?.iconName || 'us'}.svg`);
    const svgFlag = await data.text();
    const countryImageUrl = await svgToDataUri(svgFlag);

    if (!countryImageUrl) {
      throw new Error("Failed to generate flag image");
    }

    console.log("pdfContainers:", pdfContainers);
    console.log(`companyDetails: ${JSON.stringify(companyDetails)}`);
    console.log(`details: ${JSON.stringify(invoiceDetails)}`);
    console.log(`details: ${JSON.stringify(invoiceTerms)}`);
    console.log(`details: ${JSON.stringify(paymentDetails)}`);
    console.log(`details: ${JSON.stringify(yourDetails)}`);

    // Create PDF document
    const doc = (
      <Document>
        <Page size="A4" style={pdfContainers.page}>
          <PdfDetails
            companyDetails={{
              ...companyDetails,
              email: companyDetails.email || '',
              companyName: companyDetails.companyName || '',
              companyAddress: companyDetails.companyAddress || '',
              companyCity: companyDetails.companyCity || '',
              companyState: companyDetails.companyState || '',
              companyCountry: companyDetails.companyCountry || '',
              companyZip: companyDetails.companyZip || '',
              companyTaxId: companyDetails.companyTaxId || '',
            }}
            invoiceDetails={{
              items: invoiceDetails.items.map(item => ({
                itemDescription: item.itemDescription || '',
                amount: Number(item.amount) || 0,
                qty: Number(item.qty) || 1
              })),
              currency: invoiceDetails.currency?.toUpperCase() || 'USD',
              note: invoiceDetails.note || ''
            }}
            invoiceTerms={{
              invoiceNumber: invoiceTerms.invoiceNumber || '',
              issueDate: invoiceTerms.issueDate || '',
              dueDate: invoiceTerms.dueDate || ''
            }}
            paymentDetails={{
              ...paymentDetails,
              beneficiaryName: paymentDetails.beneficiaryName || '',
              iban: paymentDetails.iban || '',
              bicSwift: paymentDetails.bicSwift || '',
              bankName: paymentDetails.bankName || '',
              bankAddress: paymentDetails.bankAddress || '',
              correspondingBic: paymentDetails.correspondingBic || '',
              currency: paymentDetails.currency || 'USD'
            }}
            yourDetails={{
              ...yourDetails,
              yourEmail: yourDetails.yourEmail || '',
              yourName: yourDetails.yourName || '',
              yourAddress: yourDetails.yourAddress || '',
              yourCity: yourDetails.yourCity || '',
              yourState: yourDetails.yourState || '',
              yourCountry: yourDetails.yourCountry || '',
              yourZip: yourDetails.yourZip || '',
              yourTaxId: yourDetails.yourTaxId || ''
            }}
            countryImageUrl={countryImageUrl}
          />
        </Page>
      </Document>
    );

    const blob = await pdf(doc).toBlob();
    return blob;
  };

  useEffect(() => {
    if (status === "downloaded") {
      setTimeout(() => setStatus("not-downloaded"), 1000);
    }
  }, [status]);

  return (
    <div className="flex h-[calc(100vh-208px)] justify-center items-center">
      <div>
        <h1 className="text-5xl font-semibold pb-6">Your invoice is ready</h1>
        <p className="text-neutral-500 text-xl pb-7">
          Please review the details carefully before downloading your invoice.
        </p>
        <Button
          disabled={status === "downloading"}
          onClick={async () => {
            try {
              setStatus("downloading");
              const blob = await createPdf();
              saveAs(blob, "invoice.pdf");
              setStatus("downloaded");
            } catch (e) {
              console.error(e);
              setStatus("not-downloaded");
            }
          }}
          type="button"
          className="w-full h-12 rounded-lg text-lg"
        >
          {status === "not-downloaded" && (
            <>
              <Download className="mr-2 h-6 w-6" /> Download Invoice
            </>
          )}
          {status === "downloading" && (
            <>
              <LoaderIcon className="mr-2 h-6 w-6 animate-spin" /> Downloading...
            </>
          )}
          {status === "downloaded" && (
            <>
              <CheckCircle2 className="mr-2 h-6 w-6" /> Downloaded
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

Font.register({
  family: "Geist",
  fonts: [
    {
      src: "/font/Geist-Thin.ttf",
      fontWeight: "thin",
      format: "truetype",
    },
    {
      src: "/font/Geist-Ultralight.ttf",
      fontWeight: "ultralight",
      format: "truetype",
    },
    {
      src: "/font/Geist-Light.ttf",
      fontWeight: "light",
      format: "truetype",
    },
    {
      src: "/font/Geist-Regular.ttf",
      fontWeight: "normal",
      format: "truetype",
    },
    {
      src: "/font/Geist-Medium.ttf",
      fontWeight: "medium",
      format: "truetype",
    },
    {
      src: "/font/Geist-SemiBold.ttf",
      fontWeight: "semibold",
      format: "truetype",
    },
    {
      src: "/font/Geist-Bold.ttf",
      fontWeight: "bold",
      format: "truetype",
    },
    {
      src: "/font/Geist-UltraBlack.ttf",
      fontWeight: "ultrabold",
      format: "truetype",
    },
  ],
});

// Register Berkeley Mono
Font.register({
  family: "Berkeley Mono",
  fonts: [
    { 
      src: "/font/BerkeleyMono-Regular.ttf", 
      fontWeight: "normal",
      format: "truetype" 
    },
    { 
      src: "/font/BerkeleyMono-Bold.ttf", 
      fontWeight: "bold",
      format: "truetype" 
    }
  ]
});
