import { useState } from 'react';
// 컴포넌트 간 통신 (상위 컴포넌트를 변경하기)

export default function F() {
  const [value,setValue] = useState("아직 안바뀜");

  return (
    <div>
      <p>{value}</p>
      <B setValue={setValue} />
    </div>
  );

}

function B({setValue}) {
  return (
    <div>
      <p>여긴 B</p>
      <C setValue={setValue} />
    </div>
  );
}

function C({setValue}) {
  return (
    <div>
      <p>여긴 C</p>
      <D setValue={setValue} />
    </div>
  );
}

function D({setValue}) {
  return (
    <div>
      <p>여긴 D</p>
      <E setValue={setValue} />
    </div>
  );
}

function E({setValue}) {
  return (
    <div>
      <p>여긴 E</p>
      <button onClick={click}>클릭</button>
    </div>
  );

  function click() {
    setValue("A의 값을 변경");
  }
}