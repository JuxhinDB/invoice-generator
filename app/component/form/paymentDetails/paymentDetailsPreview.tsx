import { currencyList } from "@/lib/currency";
import { ChevronDown } from "lucide-react";

export const PaymentDetailsPreview: React.FC<
  PaymentDetails & { onClick?: (step: string) => void }
> = ({
  beneficiaryName,
  iban,
  bicSwift,
  bankName,
  bankAddress,
  correspondingBic,
  currency = "EUR",
  onClick,
}) => {
  const currencyDetails = currencyList.find(
    (currencyDetails) =>
      currencyDetails.value.toLowerCase() === currency.toLowerCase()
  )?.details;

  return (
    <div className="relative group cursor-pointer" onClick={() => onClick && onClick("4")}>
      {!!onClick && (
        <>
          <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 -rotate-45 group-hover:block hidden absolute bottom-0 right-0" />
        </>
      )}
      <div className="grid grid-cols-[1.5fr_1fr]">
        <div className="py-4 pl-10 pr-3">
          <p className="text-[11px] text-neutral-400 font-medium uppercase mb-3 font-geist">
            Bank Details
          </p>
          <div className="space-y-1">
            <div className="grid grid-cols-2 items-center">
              <p className="truncate text-[10px] font-medium text-gray-500 font-geist">
                Beneficiary Name
              </p>
              {beneficiaryName ? (
                <p className="flex truncate text-[11px] font-medium text-gray-600 font-berkeley">
                  {beneficiaryName}
                </p>
              ) : (
                <div className="rounded-[3.5px] bg-neutral-100 h-3.5 w-full animate-pulse" />
              )}
            </div>
            <div className="mb-2 grid grid-cols-2 items-center">
              <p className="truncate text-[10px] font-medium text-gray-500 font-geist">
                IBAN
              </p>
              {iban ? (
                <p className="flex truncate text-[11px] font-medium text-gray-600 font-berkeley">
                  {iban}
                </p>
              ) : (
                <div className="rounded-[3.5px] bg-neutral-100 h-3.5 w-full animate-pulse" />
              )}
            </div>
            <div className="mb-2 grid grid-cols-2 items-center">
              <p className="truncate text-[10px] font-medium text-gray-500 font-geist">
                BIC/SWIFT
              </p>
              {bicSwift ? (
                <p className="flex truncate text-[11px] font-medium text-gray-600 font-berkeley">
                  {bicSwift}
                </p>
              ) : (
                <div className="rounded-[3.5px] bg-neutral-100 h-3.5 w-full animate-pulse" />
              )}
            </div>
            <div className="mb-2 grid grid-cols-2 items-center">
              <p className="truncate text-xs font-medium text-gray-500 font-geist">
                Bank Name
              </p>
              {bankName ? (
                <p className="flex truncate text-xs font-medium text-gray-600 font-berkeley">
                  {bankName}
                </p>
              ) : (
                <div className="rounded-[3.5px] bg-neutral-100 h-4 w-full animate-pulse" />
              )}
            </div>
            <div className="mb-2 grid grid-cols-2 items-center">
              <p className="truncate text-xs font-medium text-gray-500 font-geist">
                Bank Address
              </p>
              {bankAddress ? (
                <p className="flex truncate text-xs font-medium text-gray-600 font-berkeley">
                  {bankAddress}
                </p>
              ) : (
                <div className="rounded-[3.5px] bg-neutral-100 h-4 w-full animate-pulse" />
              )}
            </div>
            <div className="mb-2 grid grid-cols-2 items-center">
              <p className="truncate text-xs font-medium text-gray-500 font-geist">
                Corresponding BIC
              </p>
              {correspondingBic ? (
                <p className="flex truncate text-xs font-medium text-gray-600 font-berkeley">
                  {correspondingBic}
                </p>
              ) : (
                <div className="rounded-[3.5px] bg-neutral-100 h-4 w-full animate-pulse" />
              )}
            </div>
          </div>
        </div>
        <div className="py-4 px-6">
          <p className="text-[11px] text-neutral-400 font-medium uppercase mb-3 font-geist">
            Payable in
          </p>
          {currencyDetails && (
            <div className="flex items-center gap-2">
              <currencyDetails.icon className="w-6 h-6 rounded-full" />
              <div>
                <p className="font-medium text-sm font-berkeley">
                  {currencyDetails.currencyName}
                </p>
                <p className="text-xxs text-neutral-400 font-geist">
                  {currencyDetails.currencySymbol} {currencyDetails.currencyShortForm}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="text-right px-10 pb-4">
        <p className="text-[24px] text-gray-800 py-12 font-berkeley">
          Thank You.
        </p>
      </div>
    </div>
  );
};
