import React, { Component } from 'react'
import './styles.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { dishesActions } from '../../store/actions/dishes'
import FormattedInputs from '../../components/numberField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { withStyles } from '@material-ui/core/styles'

export default function CreateCard() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [createName, setCreateName] = useState('')
  const [createUserName, setCreateUserName] = useState('')
  const [createEmail, setCreateEmail] = useState('')
  const [createInfo, setCreateInfo] = useState('')
  const [createApartmentNumber, setCreateApartmentNumber] = useState('')
  const dispatch = useDispatch()

  const onCreateName = (e) => {
    setCreateName(e.currentTarget.value)
  }
  const onCreateUserName = (e) => {
    setCreateUserName(e.currentTarget.value)
  }
  const onCreateEmail = (e) => {
    setCreateEmail(e.currentTarget.value)
  }
  const onCreateInfo = (e) => {
    setCreateInfo(e.currentTarget.value)
  }
  const onCreateApartmentNumber = (e) => {
    setCreateApartmentNumber(e.currentTarget.value)
  }
  const handleCreate = (e) => {
    e.preventDefault()
    setCreateName('')
    setCreateUserName('')
    setCreateEmail('')
    setCreateInfo('')
    setOpen(false)
  }

  return (
    <div>
      <button className="pay-now" onClick={handleClickOpen}>
        Оплатить сейчас
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Оформление заказа</DialogTitle>
        <DialogContent>
          <form onSubmit={handleCreate}>
            <TextField
              autoFocus
              margin="dense"
              label="Ваше имя"
              type="text"
              value={createName}
              onChange={onCreateName}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Улица"
              type="text"
              value={createUserName}
              onChange={onCreateUserName}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Дом"
              type="number"
              value={createEmail}
              onChange={onCreateEmail}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Номер квартиры (необязательно)"
              type="number"
              value={createApartmentNumber}
              onChange={onCreateApartmentNumber}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Примечания к заказу"
              type="single-line fields"
              value={createInfo}
              onChange={onCreateInfo}
              fullWidth
            />
            <br />
            <FormattedInputs />
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Оплата</FormLabel>
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Картой"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Наличными"
                />
              </RadioGroup>
            </FormControl>

            <DialogActions>
              <Button color="primary" onClick={handleCreate}>
                Подтвердить
              </Button>
              <Button onClick={handleClose} color="primary">
                Отменить
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
