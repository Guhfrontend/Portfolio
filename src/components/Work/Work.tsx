import './Work.css';

type WorkProps = {
  nameWork: string;
  roleWork: string;
  yearWork: string;
  descriptionWork: string;
  secondDescriptionWork?: string;
};

export default function Work({ nameWork, roleWork, yearWork, descriptionWork, secondDescriptionWork }: WorkProps) {
  return (
    <div className="work-container">
      <ul>
        <li>
          <strong>{nameWork}</strong> ({yearWork})
          <p className='font-bold'><em>{roleWork}</em></p>
          <p>{descriptionWork}</p>
          <p>{secondDescriptionWork}</p>
        </li>
      </ul>
    </div>
  );
}
