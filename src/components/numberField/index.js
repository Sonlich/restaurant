import * as React from 'react'
import PropTypes from 'prop-types'
import { IMaskInput } from 'react-imask'
import NumberFormat from 'react-number-format'
import Box from '@material-ui/core/Box'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props
  return (
    <IMaskInput
      {...other}
      mask="+ 38 (000) 000-00-00"
      definitions={{
        '#': /[0-9]/
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  )
})

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        })
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  )
})

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default function FormattedInputs() {
  const [values, setValues] = React.useState({
    numberformat: '1320'
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1
        }
      }}
      fullWidth
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">
          Номер телефона
        </InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
          fullWidth
        />
      </FormControl>
    </Box>
  )
}
