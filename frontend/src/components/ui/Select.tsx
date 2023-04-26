/* eslint-disable import/no-extraneous-dependencies */
import { Select, Option } from '@material-tailwind/react';

export default function SelectOption() {
  return (
    <div className="flex flex-col w-72 gap-6">
      <Select variant="static" label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </div>
  );
}
