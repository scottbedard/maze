type Props = {
  cols: number
  onColsChange: (n: number) => void
  onRowsChange: (n: number) => void
  rows: number
}

export function Controls(props: Props) {
  const onSizeInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    const value = Number(target.value)
    const rows = Math.floor(value * 9 / 16)
    const cols = value

    props.onColsChange(Math.max(cols, 3))
    props.onRowsChange(Math.max(rows, 3))
  }

  return <div class="bg-white grid gap-2 fixed p-3 rounded-br-lg shadow-2xl text-sm w-40">
    <div>
      <div>Size &bull; <span class="tabular-nums">{props.cols} &times; {props.rows}</span></div>
      <input
        class="w-full"
        max="320"
        min="1"
        onInput={onSizeInput}
        type="range" />
    </div>
  </div>
}
