'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { TailSpin } from 'react-loader-spinner';

const FetchGit = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
            const result = await axios(
                'https://api.github.com/users/nixoletas/repos'
            );
            setRepos(result.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
        setLoading(false);
    };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className='w-full h-full flex justify-center items-center'>
                <TailSpin type="Puff" color="#800080" height={100} width={100}/>
            </div>
        )
    }

    return (
        <ul className='pt-2 pb-24'>
            {repos.map(repo => (
                <li key={repo.id} className=' transition-all grid-flow-row p-2 m-2 border-4 border-purple-950 rounded-lg'>
                    <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <h1 className='text-4xl text-white/80 max-sm:text-3xl '>
                        {repo.name}
                        </h1>
                        <p className='text-purple-400 my-2'>{repo.description}</p>
                        <div className='flex w-full justify-center pt-4'>
                        {repo.topics.map((topic, index) => (
                        <p key={`${repo.id}-${index}`} className='flex flex-wrap border-2 bg-slate-950 text-blue-400 w-fit justify-center text-center p-2 mx-1 border-white/40 rounded-lg text-sm max-sm:text-xs'>{topic}</p>
                    ))} 
                        </div>
                        <Link href={`${repo.homepage}`} className='flex underline justify-center m-2 hover:text-white text-white/80'>{repo.homepage}</Link>
                    </Link>
                    <p></p>
                </li>
            ))}
        </ul>
    );
};

export default FetchGit;
