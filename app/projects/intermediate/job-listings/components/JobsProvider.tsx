"use client"
import { createContext, useContext, useState } from "react";
import { jobs } from "../data";

const JobsContext = createContext(null);
export default function JobsProvider({ children }) {
    const [filters, setFilters] = useState([]);

    function addFilter(newFilter) {
        //If it is already in the filters, skip.
        if (filters.includes(newFilter)) {
            return;
        }
        setFilters((prevFilters) => [...prevFilters, newFilter])
    }
    function removeFilter(targetFilter) {
        const newFilters = filters.filter((filter) => filter !== targetFilter)
        setFilters(newFilters)
    }
    function clearFilters() {
        setFilters([])
    }
    const filteredJobs = filters.length === 0 ? jobs : jobs.filter((job) => {
        const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
        // return jobTags.some(tag => filters.includes(tag))
        return filters.every((filter) => jobTags.includes(filter))
    })

    return <JobsContext value={{ jobs: filteredJobs, filters, addFilter, removeFilter, clearFilters }}>{children}</JobsContext>
}

export function useJobs() {
    return useContext(JobsContext)
}
