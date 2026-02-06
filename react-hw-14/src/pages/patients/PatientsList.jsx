import { useGetPatientsQuery } from "@/api/slices/patientApi";
import PatientCard from "./PatientCard";
import { Link } from "react-router";
import styles from "./PatientsList.module.css"
import AddButton from "@/components/icons/AddButton";
import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";
import SearchIcon from "@/components/icons/SearchIcon";
import ClearIcon from "@/components/icons/ClearIcon";
import ErrorState from "@/components/ErrorState/ErrorState";

function PatientsList() {
    const [searchTerm, setSearchTerm] = useState("")
    const [debouncedSearch, setDebouncedSearch] = useState("")

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchTerm)
        }, 500)

        return () => clearTimeout(handler)
    }, [searchTerm])

    const { data: patients = [], error, isLoading, isFetching } = useGetPatientsQuery(
        debouncedSearch ? { name: debouncedSearch } : undefined
    )

    if (isLoading) return <Loader />
    if (error) return <ErrorState />

    return (
        <div className={styles.listContainer}>
            <div className={styles.headerSection}>
                <h1 className={styles.title}>Список пацієнтів</h1>

                <div className={styles.controlsRow}>
                    <div className={styles.searchWrapper}>
                        <input
                            type="text"
                            className={styles.searchInput}
                            placeholder="Пошук за прізвищем або ім'ям..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className={styles.searchIcon}>
                            {isFetching ? <div className={styles.miniSpinner}></div> : <SearchIcon />}
                        </span>
                        {searchTerm && (
                            <button
                                className={styles.clearBtn}
                                onClick={() => setSearchTerm("")}
                            >
                                <ClearIcon />
                            </button>
                        )}
                    </div>

                    <Link
                        to="/patients/new"
                        className={styles.addButton}
                    >
                        <AddButton />
                        Додати пацієнта
                    </Link>
                </div>
            </div>

            <div className={styles.gridHeader}>
                <span className={styles.columnTitle}>Ім'я</span>
                <span className={styles.columnTitle}>Дата народження</span>
                <span className={styles.columnTitle}>Телефон</span>
                <span className={styles.columnTitle}>Електронна пошта</span>
                <span className={styles.columnTitle}>Нотатки</span>
            </div>

            <div className={styles.rowsContainer}>
                {patients.length > 0 ? (
                    patients.map((patient) => (
                        <PatientCard key={patient.id} patient={patient} />
                    ))
                ) : (
                    <div className={styles.emptyState}>
                        <p>Нікого не знайдено за запитом "{debouncedSearch}"</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PatientsList;