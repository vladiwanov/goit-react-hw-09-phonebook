import React from 'react';
import s from './Alert.module.css'

export default function Alert({text}) {
  return (
    <>
      <p className={s.alert}>{text}</p>
    </>
  )
}