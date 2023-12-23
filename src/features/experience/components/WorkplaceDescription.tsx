import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { Workplace } from '../models/Workplace';

interface Props {
  workplace: Workplace;
}

export const WorkplaceDescription: React.FunctionComponent<Props> = ({
  workplace,
}) => {
  return (
    <div
      className='hover:bg-[#fafafa] hover:cursor-pointer group py-3 px-5 rounded-md'
      onClick={() => window.open(workplace.href, '_blank')}
    >
      <div className='flex items-center'>
        <h1 className='font-medium text-base group-hover:text-activeText'>
          {workplace.role} &#8212; {workplace.name}
        </h1>
        <ArrowUpRightIcon className='ml-2 h-4 w-4 transform group-hover:text-activeText group-hover:-translate-y-1 group-hover:translate-x-1 translate-y-px motion-reduce:transition-none transition-all' />
      </div>
      <h4 className='text-slate-500'>
        {workplace.dateFrom} - {workplace.dateTo}
      </h4>
      <p className='text-slate-500'>{workplace.description}</p>

      <ul className='flex gap-2 mt-4'>
        {workplace.techStack.map((t, index) => (
          <li key={`${t}-${index}`} className='px-3 py-1 border rounded-xl'>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};
