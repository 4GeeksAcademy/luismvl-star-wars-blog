export default function addThousandSeparator(num) {
  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')
}
