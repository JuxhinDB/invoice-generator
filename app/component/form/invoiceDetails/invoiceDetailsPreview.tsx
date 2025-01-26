/* eslint-disable @next/next/no-img-element */
import React from "react";
import { currencyList } from "@/lib/currency";
import { ChevronDown } from "lucide-react";

export const InvoiceDetailsPreview: React.FC<
  InvoiceItemDetails & { onClick?: (step: string) => void }
> = ({ items, note, currency = "INR", onClick }) => {
  const currencyDetails = currencyList.find(
    (currencyDetails) =>
      currencyDetails.value.toLowerCase() === currency.toLowerCase()
  )?.details;

  const total = items.reduce((acc, item) => acc + (item.amount || 0), 0);

  return (
    <div
      className="border-b border-dashed cursor-pointer relative group"
      onClick={() => onClick && onClick("3")}
    >
      {!!onClick && (
        <>
          <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 -rotate-45 group-hover:block hidden absolute bottom-0 right-0 " />
        </>
      )}
      <div className="py-4 px-10">
        <p className="text-[11px] text-neutral-400 font-semibold uppercase pb-3.5 font-geist">
          Invoice Details
        </p>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-4">
              <p className="text-sm text-gray-600 font-medium font-berkeley">
                {item.itemDescription}
              </p>
              <p className="text-right text-sm font-medium font-berkeley">
                {currencyDetails?.currencySymbol} {(item.amount || 0).toLocaleString()}
              </p>
            </div>
          ))}
          {note && (
            <p className="text-xs text-gray-500 font-berkeley">{note}</p>
          )}
          <div className="pt-2 border-t border-dashed">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500 font-geist">Total</p>
              <p className="text-sm font-medium font-berkeley">
                {currencyDetails?.currencySymbol} {total.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
