import { Dropdown } from "flowbite-react";
import { cityKode } from "../../data/dummy";
import { Dispatch, SetStateAction } from "react";

type Props = {
    setCity: Dispatch<SetStateAction<{ id: string; city: string }>>;
};

export default function FlowDropdown({ setCity }: Props) {
    return (
        <Dropdown
            label="Pilih Kota"
            dismissOnClick={true}
            theme={{
                content: "w-32",
            }}
            style={{ backgroundColor: "#10b981" }}
        >
            {cityKode.map((city) => {
                return (
                    <Dropdown.Item
                        key={city.id}
                        onClick={() => {
                            setCity({ id: city.id, city: city.city });
                        }}
                    >
                        {city.city}
                    </Dropdown.Item>
                );
            })}
        </Dropdown>
    );
}
