import { useForm } from "react-hook-form";

// export default function FormPage() {
//     return (
//         <form>
//             <label>
//                 Nome:
//                 <input name="nome" placeholder="digite seu nome" />
//             </label>

//             <label>
//                 E-mail:
//                 <input name="email" placeholder="digite seu email" />
//             </label>

//             <button type="submit">Enviar</button>
//         </form>
//     );
// };

export default function FormPage() {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <label>
                Nome:
                <input placeholder="digite seu nome" {...register("nome")} />
            </label>

            <label>
                E-mail:
                <input placeholder="digite seu email" {...register("email")} />
            </label>

            <button type="submit">Enviar</button>
        </form>
    );
};