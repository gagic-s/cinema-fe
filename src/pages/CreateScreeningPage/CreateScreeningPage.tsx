import { format, setHours, setMinutes, setSeconds } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Modal from "../../components/shared/Modal/Modal";
import { createScreening } from "../../services/screenings/screening-service";
import style from "./CreateScreeningPage.module.css";
import {
  AddScreeningResponse,
  AddScreeningRequest,
} from "../../types/Screenings";

type ScreeningFormValues = {
  screeningDate: Date | null;
  screeningTime: Date | null;
  ticketPrice: number;
  screeningRows: number;
  screeningColumns: number;
};

const CreateScreeningPage = () => {
  const { id } = useParams<string>();
  const [screeningCreated, setScreeningCreated] = useState<boolean>(false);
  const [screenings, setScreenings] = useState<AddScreeningResponse[]>([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ScreeningFormValues>({
    defaultValues: {
      screeningTime: null,
      ticketPrice: 0,
      screeningRows: 0,
      screeningColumns: 0,
      screeningDate: null,
    },
  });

  const onSubmit = async (data: ScreeningFormValues) => {
    const date = format(new Date(data.screeningDate!), "yyyy-MM-dd");
    let time = new Date(data.screeningTime!);
    time = setSeconds(setMinutes(setHours(time, 15), 0), 0);
    const formattedTime = format(time, "HH:mm:ss");

    if (id) {
      const newScreening: AddScreeningRequest = {
        movie_id: id,
        screeningDate: date,
        screeningTime: formattedTime,
        ticketPrice: data.ticketPrice,
        screeningRows: data.screeningRows,
        screeningColumns: data.screeningColumns,
      };

      const screening: AddScreeningResponse = await createScreening(
        newScreening
      );
      setScreenings((prev) => [...prev, screening]);
      setScreeningCreated(true);
    }
  };

  return (
    <div className={style.formContainer}>
      <h2>Add screening: </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Screening Date:</label>
        <Controller
          control={control}
          name="screeningDate"
          rules={{ required: "Screening date is required" }}
          render={({ field }) => (
            <DatePicker
              placeholderText="Select Date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              dateFormat="yyyy/MM/dd"
            />
          )}
        />
        {errors.screeningDate && (
          <p style={{ color: "red" }}>{errors.screeningDate.message}</p>
        )}

        <label>Screening Time</label>
        <Controller
          control={control}
          name="screeningTime"
          rules={{ required: "Screening time is required" }}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(time) => field.onChange(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              placeholderText="Select Time"
            />
          )}
        />
        {errors.screeningTime && <p>This field is required</p>}

        <label>Ticket Price</label>
        <input {...register("ticketPrice")} defaultValue="test" />

        <label>Screening Rows</label>
        <input
          {...register("screeningRows", {
            max: { value: 10, message: "Value cannot be greater than 10" },
          })}
        />
        {errors.screeningRows && <p>{errors?.screeningRows?.message || ""}</p>}

        <label>Screening Columns</label>
        <input
          {...register("screeningColumns", {
            required: "This field is required",
            max: { value: 10, message: "Value cannot be greater than 10" },
          })}
        />
        {errors.screeningColumns && (
          <p>{errors?.screeningColumns?.message || ""}</p>
        )}

        <input type="submit" />
      </form>
      {screenings &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        screenings.map((screening: any) => (
          <p> Screening on: {screening.screening_id}</p>
        ))}
      <Modal
        isOpen={screeningCreated}
        onClose={() => setScreeningCreated(false)}
        onConfirm={() => setScreeningCreated(false)}
        onCancel={() => setScreeningCreated(false)}
      >
        <p>Successfully created screening</p>
      </Modal>
    </div>
  );
};

export default CreateScreeningPage;
