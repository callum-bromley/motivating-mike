import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Box } from '@chakra-ui/react'

type DatePickerProps = {
  selectedDate: Date | null
  onChange: (date: Date | null) => void
}

function DatePicker({ selectedDate, onChange }: DatePickerProps) {
  return (
    <Box>
      <ReactDatePicker
        selected={selectedDate}
        onChange={onChange}
        placeholderText="Select a due date"
        dateFormat="MMMM d, yyyy"
        className="chakra-input css-1c6vzzc"
      />
    </Box>
  )
}

export default DatePicker
