import { useEffect, useState } from 'react'
import { post } from '../api/userApi';
//import { useNavigate } from 'react-router-dom';

export function useUserForm<T>(initialForm: T) {
    const [formData, setFormData] = useState(initialForm);
    //const navigate = useNavigate();
    useEffect(() => {
    }, [formData]);

    //devuelve el value del input
    const onChange = ({ target }) => {
        const { name, value } = target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }
    //envia los valores del formulario
    /*const onSubmit = async (e: any) => {
        //evita que el formulario se envíe y que la página se recargue
        e.preventDefault();
        try {
            const response: UserResponse = await post(formData);

            if (response.status === "success") {
                navigate("/users/list");
                return true;
            } else {
                console.error("Error:", response.message);
                return false;
            }
        } catch (error) {
            console.error("Error al crear el usuario:", error);
        }
    };*/

    const onResetForm = () => {
        setFormData(initialForm);
    }

    const postUser = async (e: any) => {
        //evita que el formulario se envíe y que la página se recargue
        e.preventDefault();
        const response = await post(formData);
        console.log("response-useHook", response);
        try {
            if (response.code === 200) {
                //navigate("/users/list");
                console.log("todo oki");
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Error al crear el usuario:", error);
            return false;
        }
    }

    const put = async (e: any) => {
        //evita que el formulario se envíe y que la página se recargue
        e.preventDefault();
    }

    return {
        formData,
        postUser,
        put,
        onChange,
        onResetForm,
    };
}

export default useUserForm
