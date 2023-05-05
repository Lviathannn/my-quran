import { Table } from "flowbite-react";

type Props = {
    data: {
        subuh: string;
        dzuhur: string;
        ashar: string;
        maghrib: string;
        isya: string;
        tanggal: string;
    };
    city: string;
};

export default function FlowTable({ data, city }: Props) {
    return (
        <>
            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-slate-600">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Shubuh
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {data?.subuh}
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {city}
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {data?.tanggal}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-slate-600">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Dzuhur
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {data?.dzuhur}
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {city}
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {data?.tanggal}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-slate-600">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Ashar
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {data?.ashar}
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {city}
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {data?.tanggal}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-slate-600">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Maghrib
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {data?.maghrib}
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {city}
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {data?.tanggal}
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-slate-600">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Isya
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {data?.isya}
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {city}
                    </Table.Cell>
                    <Table.Cell className="dark:text-slate-100">
                        {data?.tanggal}
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </>
    );
}
