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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form className="w-full p-10" action="">
                            <label className="w-full" htmlFor="">Titolo</label>
                            <input type="text" name="title" placeholder="Titolo" />
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
