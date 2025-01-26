import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { currencyList } from "@/lib/currency";
import { pdfTypography, pdfUtils } from "@/lib/pdfStyles";

export const InvoiceDetailsPdf: React.FC<InvoiceItemDetails> = ({
  note,
  items,
  currency = "USD",
}) => {
  const currencyType = currency;
  const currencyDetails = currencyList.find(
    (currency) => currency.value.toLowerCase() === currencyType.toLowerCase()
  )?.details;
  const subtotal = calculateTotalAmount(items);
  const totalAmount = subtotal;

  return (
    <View style={{ paddingVertical: 16 }}>
      <View style={{ paddingHorizontal: 40 }}>
        <Text style={{ 
          ...pdfTypography.title, 
          marginBottom: 14, 
          fontSize: 11, 
          color: "#9CA3AF", 
          textTransform: "uppercase",
          fontFamily: "Geist"
        }}>
          Invoice Details
        </Text>
        
        {items.map(({ itemDescription, amount, qty }, index) => (
          <View key={index} style={{ 
            flexDirection: "row", 
            justifyContent: "space-between",
            marginBottom: 16,
            alignItems: "center"
          }}>
            <Text style={{ 
              flex: 1,
              fontSize: 11,
              color: "#4B5563", 
              fontFamily: "Berkeley Mono" 
            }}>
              {itemDescription}
            </Text>
            <Text style={{ 
              fontSize: 11,
              color: "#4B5563", 
              fontFamily: "Berkeley Mono"
            }}>
              {currencyDetails?.currencySymbol} {amount ? addCommasToNumber((qty ? qty : 1) * amount) : ""}
            </Text>
          </View>
        ))}

        {note && (
          <Text style={{ 
            color: "#6B7280", 
            fontFamily: "Berkeley Mono", 
            fontSize: 10,
            marginBottom: 16
          }}>
            {note}
          </Text>
        )}

        <View style={{ 
          borderTopWidth: 1, 
          borderColor: "#E5E7EB", 
          borderStyle: "dashed",
          paddingTop: 8,
          marginTop: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Text style={{ 
            fontSize: 12,
            color: "#6B7280", 
            fontFamily: "Geist"
          }}>
            Total
          </Text>
          <Text style={{ 
            fontSize: 12,
            color: "#4B5563", 
            fontFamily: "Berkeley Mono"
          }}>
            {currencyDetails?.currencySymbol} {addCommasToNumber(totalAmount)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const calculateTotalAmount = (items: Item[]): number =>
  items.reduce((total, item) => {
    const quantity = item.qty ? +item.qty : 1;
    const amount = item.amount ? +item.amount : 0;
    return total + quantity * amount;
  }, 0);

const addCommasToNumber = (number: number): string => {
  let numberString = number.toString();
  const parts = numberString.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};
