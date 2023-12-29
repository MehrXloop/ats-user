import { FormData } from '@/components/ApplyJobModal';

const SendEmail = (data: FormData) => {
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            alert(response.message);
        })
        .catch((err) => {
            alert(err);
        });
    // console.log(data)
}

export default SendEmail