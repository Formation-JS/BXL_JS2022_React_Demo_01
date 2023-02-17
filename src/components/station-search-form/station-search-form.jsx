import { useForm } from 'react-hook-form';

const StationSearchForm = ({ onQuery }) => {

    const { handleSubmit, register, reset, setFocus } = useForm({
        defaultValues: {
            station: ''
        }
    });

    const handleSearchStation = (data) => {
        onQuery(data.station);
        console.log(data);

        setFocus('station')
        reset();
    }

    return (
        <form onSubmit={handleSubmit(handleSearchStation)} >
            <label htmlFor="search-station">Gare : </label>
            <input type="text" id="search-station"
                { ...register('station', { required: true }) } />

            <button type="submit">Rechercher</button>
        </form>
    )
}

StationSearchForm.defaultProps = {
    onQuery: () => {}
};

export default StationSearchForm;