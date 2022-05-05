import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function PostForm(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Crea post</h2>}
        >
            <Head title="Crea Post" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                        <form className="min-w-4xl max-w-4xl mx-auto p-10">
                            <div className="my-5">
                                <label className="w-full" htmlFor="">Titolo</label>
                                <input className="w-full rounded-md" type="text" name="title" placeholder="Titolo" />
                            </div>
                            <div>
                                <label className="w-full" htmlFor="">Testo</label>
                                <textarea className="w-full rounded-md" name="body" placeholder="Corpo" />
                            </div>
                            <button className="bg-red-400 rounded-md w-48 px-4 py-3 text-white hover:bg-red-300" type="submit"> Crea post </button>
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
