import NewMeetForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
	function addMeetupHandler(enteredMeetupData) {
		console.log(enteredMeetupData)
	}

	return (
		<NewMeetForm onAddMeetup={addMeetupHandler} />
	)
}

export default NewMeetupPage;