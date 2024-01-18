import dayjs, { Dayjs } from "dayjs"
import { atom } from "jotai"

export const today: Dayjs = dayjs()

export const startDateAtom = atom<Dayjs | null>(today)
export const endDateAtom = atom<Dayjs | null>(today)
export const menuAtom = atom(false)
