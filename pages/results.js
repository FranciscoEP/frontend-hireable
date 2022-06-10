import React from 'react';
import { useRouter } from 'next/router';
import Message from '../components/Message';

const Results = () => {
    const router = useRouter();
    // useEffect(() => {
    //     if (!router?.asPath.includes('0') || !router?.asPath.includes('1'))
    //         router.push('/');
    // }, [router]);

    return router?.asPath.includes('1') ? (
        <Message
            isHireable
            heading="Applicant could be hired"
            paragraph="According to our model, the params given could put on track it
    for a further recognition interview."
        />
    ) : (
        <Message
            isHireable={false}
            heading="The applicant might not be qualified for the internship"
            paragraph="Verify it's record once again but, it seems the applicant might
            not suite for the internship position we are looking for at this
            moment."
        />
    );
};

export default Results;
