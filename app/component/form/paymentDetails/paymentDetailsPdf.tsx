/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import { currencyList } from "@/lib/currency";
import { pdfTypography, pdfUtils } from "@/lib/pdfStyles";

interface PaymentDetailsPdfProps extends PaymentDetails {
  countryImageUrl: string;
}

export const PaymentDetailsPdf: React.FC<PaymentDetailsPdfProps> = ({
  beneficiaryName,
  iban,
  bicSwift,
  bankName,
  bankAddress,
  correspondingBic,
  currency = "EUR",
  countryImageUrl,
}) => {
  const currencyDetails = currencyList.find(
    (currencyDetail) =>
      currencyDetail.value.toLowerCase() === currency.toLowerCase()
  )?.details;

  return (
    <View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={{ flex: 1, paddingLeft: 40, paddingRight: 12, paddingVertical: 16 }}>
          <Text style={{ ...pdfTypography.title, marginBottom: 12 }}>Bank Details</Text>
          <View style={{ gap: 4 }}>
            <View style={pdfUtils.flexRowItemCenter}>
              <Text style={{ width: 100, ...pdfTypography.paymentTitle }}>Beneficiary Name</Text>
              <Text style={pdfTypography.description}>{beneficiaryName || "-"}</Text>
            </View>
            <View style={pdfUtils.flexRowItemCenter}>
              <Text style={{ width: 100, ...pdfTypography.paymentTitle }}>IBAN</Text>
              <Text style={pdfTypography.description}>{iban || "-"}</Text>
            </View>
            <View style={pdfUtils.flexRowItemCenter}>
              <Text style={{ width: 100, ...pdfTypography.paymentTitle }}>BIC/SWIFT</Text>
              <Text style={pdfTypography.description}>{bicSwift || "-"}</Text>
            </View>
            <View style={pdfUtils.flexRowItemCenter}>
              <Text style={{ width: 100, ...pdfTypography.paymentTitle }}>Bank Name</Text>
              <Text style={pdfTypography.description}>{bankName || "-"}</Text>
            </View>
            <View style={pdfUtils.flexRowItemCenter}>
              <Text style={{ width: 100, ...pdfTypography.paymentTitle }}>Bank Address</Text>
              <Text style={{ ...pdfTypography.description, flex: 1, flexWrap: 'wrap' }}>{bankAddress || "-"}</Text>
            </View>
            <View style={pdfUtils.flexRowItemCenter}>
              <Text style={{ width: 100, ...pdfTypography.paymentTitle }}>Corresponding BIC</Text>
              <Text style={pdfTypography.description}>{correspondingBic || "-"}</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, paddingLeft: 40, paddingRight: 12, paddingVertical: 16 }}>
          <Text style={{ ...pdfTypography.title, marginBottom: 12 }}>Payable in</Text>
          {currencyDetails && (
            <View style={{ ...pdfUtils.flexRowItemCenter, gap: 8 }}>
              <Image src={countryImageUrl} style={{ width: 20, height: 20, borderRadius: 10, objectFit: 'cover' }} />
              <View>
                <Text style={{ ...pdfTypography.description, fontSize: 12 }}>
                  {currencyDetails.currencyName}
                </Text>
                <Text style={pdfTypography.title}>
                  {currencyDetails.currencySymbol} {currencyDetails.currencyShortForm}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
      <View style={{ paddingRight: 40, paddingTop: 48, paddingBottom: 24 }}>
        <Text style={{ 
          fontFamily: "Berkeley Mono",
          fontSize: 24,
          textAlign: "right",
          color: "#1f2937"
        }}>
          Thank You.
        </Text>
      </View>
    </View>
  );
};
