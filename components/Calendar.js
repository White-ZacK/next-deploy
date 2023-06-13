import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "@utils/calendar";
import cn from "@utils/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Calendar() {
	const days = ["أح", "إث", "ثل", "أر", "خ", "ج", "س"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
	return (
		<div className="flex flex-col justify-center w-1/2 mx-auto  items-center ">
			<div className="w-64 h-64 ">
				<div className="flex justify-between items-center">
					
					<div className="flex gap-8 items-center ">
						<GrFormPrevious
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
						<h1
							className=" cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							اليوم
						</h1>
						<GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
					</div>
					<h1 className="select-none font-semibold">
						{months[today.month()]}, {today.year()}
					</h1>
				</div>
				<div className="grid grid-cols-7 " dir="rtl">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm text-center h-10 w-10 grid place-content-center text-gray-500 select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 " dir="rtl">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="p-1 text-center h-8 grid place-content-center text-sm border-t"
								>
									<h1
										className={cn(
											currentMonth ? "" : "text-gray-400",
											today
												? "bg-green-600 text-white"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-black text-white"
												: "",
											"h-6 w-6 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>

		</div>
	);
}
