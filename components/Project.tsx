import React from 'react';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';

export default function Project({
  title,
  img,
  description,
  technologies,
  links,
  variant = 'primary',
}) {
  return (
   <li key={title}>
      <div className={`antialiased card rounded-lg bg-base-100 ring ring-neutral-100/10 hover:ring-neutral-100/20 compact w-full h-full text-base-content shadow-md transition-all overflow-hidden ${variant === 'secondary' ? 'flex flex-row' : ''}`}>
        <Image
          src={img}
          alt={`Screenshot of ${title} project`}
          height={320}
          width={320}
          className={`object-cover overflow-hidden w-full ${variant === 'secondary' ? '!w-48' : ''} ${links.demo.length || links.github.length ? 'cursor-pointer' : ''}`}
         />
        <div className="card-body">
          <a
            href={links.demo ? links.demo : links.github ? links.github : '/'}
            className="card-title w-fit"
          >
            {title}
          </a>
          <p>{description}</p>
          <p className="mt-4">
            <strong>Stack: </strong> {technologies.join(', ')}
          </p>
          <div className="card-actions justify-end mt-4">
            {links.demo.length ? (
              <a
                href={links.demo}
                className="project-button-primary !bg-accent !rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            ) : null}
            {links.github.length ? (
              <a
                href={links.github}
                className="project-button-secondary !rounded-md !bg-neutral-600 !text-neutral-200/90 hover:!text-neutral-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <div className="pl-2">
                  <BsGithub size="1.5em" />
                </div>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </li>
  );
}
