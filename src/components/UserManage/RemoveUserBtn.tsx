import Btn from "../Btn";
import RemoveUserModal, { RemoveModalProps } from "./ManageModal/RemoveUserModal";

type Props = {
    setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    openModal: () => void;
} & RemoveModalProps;

const RemoveUserBtn: React.FC<Props> = ({
    setContent,
    openModal,
    userNames,
    handleRemoveUser,
    closeModal
}) => {
    const handleClick = () => {
        setContent(
            <RemoveUserModal
                userNames={userNames}
                handleRemoveUser={handleRemoveUser}
                closeModal={closeModal}
            />
        );
        openModal();
    };

    return (
        <Btn
            onClick={handleClick}
            className="w-32 h-10 m-auto"
            bgColor="bg-slate-500"
            hoverBgColor="bg-slate-700">
            <span className="text-zinc-300 text-xl font-extrabol p-2">
                Remove
            </span>
        </Btn>
    );
};

export default RemoveUserBtn;
