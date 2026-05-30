"use client";

import Image from "next/image";
import type { IQuestionDetail } from "@/types/IQuestion";

interface QuestionDetailProps {
  info: IQuestionDetail;
  selectedValue: string;
  onOptionChosen: (id: string, option: string) => void;
}

export default function QuestionDetail({
  info,
  selectedValue,
  onOptionChosen,
}: QuestionDetailProps) {
  return (
    <fieldset className="border-0 p-0 m-0">
      <legend className="sr-only">{info.question}</legend>

      <div className="flex items-start gap-4 mb-5">
        <div className="shrink-0 w-12 h-12 rounded-full bg-hotline-light flex items-center justify-center overflow-hidden">
          <Image
            src={info.iconUrl}
            alt=""
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
        </div>
        <div>
          <span className="text-xs font-semibold text-hotline uppercase tracking-wider">
            {info.id}
          </span>
          <p className="text-base sm:text-lg font-bold text-gray-900 mt-1">
            {info.question}
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {[info.optionA, info.optionB, info.optionC].map((option) => {
          const isSelected = selectedValue === option;

          return (
            <label
              key={option}
              className={`relative flex items-center justify-center px-4 py-3 rounded-xl border-2 cursor-pointer
                text-sm font-medium transition-all duration-200
                ${
                  isSelected
                    ? "border-hotline bg-hotline text-white font-semibold shadow-md scale-[1.02]"
                    : "border-gray-200 bg-white text-gray-700 hover:border-hotline hover:bg-hotline-light/60"
                }`}
            >
              <input
                type="radio"
                name={info.id}
                value={option}
                checked={isSelected}
                className="sr-only"
                onChange={() => onOptionChosen(info.id, option)}
              />
              {isSelected && (
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white" />
              )}
              {option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
