import React from 'react';
import { history } from 'umi';

export type Props = {
};

const Test: React.FC<Props> = (props) => {
console.info(history.location.query)

return (<div></div>)
};

export default Test;