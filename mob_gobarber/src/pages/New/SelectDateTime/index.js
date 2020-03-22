import React, { useState } from 'react';

import Background from '~/components/Background';
import DateInpur from '~/components/DateInput';
import { Container } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Container>
        <DateInpur date={date} setDate={setDate} />
      </Container>
    </Background>
  );
}
