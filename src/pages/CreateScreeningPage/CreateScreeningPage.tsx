import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import style from "./CreateScreeningPage.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, setSeconds, format } from "date-fns";

type FormValues = {
  screeningDate: Date | null;
  screeningTime: Date | null;
  ticketPrice: number;
  screeningRows: number;
  screeningColumns: number;
};

const CreateScreeningPage = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      screeningTime: null,
      ticketPrice: 0,
      screeningRows: 0,
      screeningColumns: 0,
      screeningDate: null,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const date = format(new Date(data.screeningDate), "yyyy-MM-dd");
    let time = new Date(data.screeningTime);
    time = setSeconds(setMinutes(setHours(time, 15), 0), 0);
    const formattedTime = format(time, "HH:mm:ss");
    const newScreening = {
      movie_id: id,
      screeningDate: date,
      screeningTime: formattedTime,
      ticketPrice: data.ticketPrice,
      screeningRows: data.screeningRows,
      screeningColumns: data.screeningColumns,
    };
    console.log("newScreening", newScreening);
  };

  return (
    <div className={style.formContainer}>
      <h2>Add screening: </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Screening Date:</label>
        <Controller
          control={control}
          name="screeningDate"
          rules={{ required: "Screening date is required" }} // Validation rules
          render={({ field }) => (
            <DatePicker
              placeholderText="Select Date"
              onChange={(date) => field.onChange(date)} // Send value to hook form
              selected={field.value} // Current value from hook form
              dateFormat="yyyy/MM/dd" // Custom date format
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
          rules={{ required: "Screening time is required" }} // Validation rules
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(time) => field.onChange(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15} // 15-minute intervals
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
    </div>
  );
};

export default CreateScreeningPage;
