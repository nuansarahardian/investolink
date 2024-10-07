import { Input } from "@shadcn/ui";
import { withTranslation } from "react-google-multi-lang";
const InputForm = () => {
    return (
        <div className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
            <label className="text-gray-700">Nama Lengkap:</label>
            <Input type="text" placeholder="Masukkan nama lengkap" />

            <label className="text-gray-700">Email:</label>
            <Input type="email" placeholder="Masukkan email" />

            <Button variant="primary">Submit</Button>
        </div>
    );
};

export default withTranslation(InputForm);
