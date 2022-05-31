import React, { useCallback, useState } from 'react'
import { Alert, Icon, Input, InputGroup } from 'rsuite'

function EditableInput({
  initialValue,
  onSave,
  label = null,
  placeholder = "Write Your Value",
  Empty = "Input is Empty",
  ...inputProps
}) {
  const [input, setinput] = useState(initialValue)
  const [Editable, setEditable] = useState(false)
  const onInputchange = useCallback((value) => {
    setinput(value)
  }, [])
  const onEditClick = useCallback(() => {
    setEditable(p => !p)
    setinput(initialValue)
  }, [initialValue])
  const onSaveClick = async () => {
    const trimmed = input.trim()
    if (trimmed === '') {
      Alert.info(Empty, 4000)
    }
    if (trimmed !== initialValue) {
      await onSave(trimmed)
    }
    setEditable(false)
  }

  return (
    <>
      <div className='input-label w-100'>{label}</div>
      <InputGroup>
        <Input disabled={!Editable} {...inputProps} placeholder={placeholder} onChange={onInputchange} value={input} />
        <InputGroup.Button onClick={onEditClick}>
          <Icon icon={Editable ? 'close' : 'edit2'} />
        </InputGroup.Button>
        {Editable &&
          <InputGroup.Button onClick={onSaveClick}>
            <Icon icon="check" />
          </InputGroup.Button>
        }
      </InputGroup>
    </>
  )
}

export default EditableInput

