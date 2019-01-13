export function transformDate(date) {
  const re = /[.]/gi;
  if (date === undefined) return ''
  const newDate = new Date(date)
  return newDate.toLocaleDateString().replace(re,'/')

}

export function transformCurrency(val) {
  if (val === undefined) return ''
  const newVal = Number(val)
  return newVal.toLocaleString()
}

