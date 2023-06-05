import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Projects',
    links: [
      { href: 'https://help.payless.health/american-hospitals', children: 'Payless Health' },
      { href: 'https://arxiv.org/abs/1904.05342', children: 'ClinicalBERT' },
      { href: 'https://www.datathinking.org/university-of-tartu', children: 'Data Thinking' },
      { href: 'https://childfx.com', children: 'ChildFx' },
    ]
  },
  {
    title: 'Riders',
    links: [
      { href: '/five-boro-bike-tour/aaron.md', children: 'Aaron' },
      { href: '/five-boro-bike-tour/alex.md', children: 'Alex' },
      { href: '/five-boro-bike-tour/amy.md', children: 'Amy' },
      { href: '/five-boro-bike-tour/andrew.md', children: 'Andrew' },
      { href: '/five-boro-bike-tour/charlie.md', children: 'Charlie' },
      { href: '/five-boro-bike-tour/elizabeth.md', children: 'Elizabeth' },
      { href: '/five-boro-bike-tour/ellen.md', children: 'Ellen' },
      { href: '/five-boro-bike-tour/evelyn.md', children: 'Evelyn' },
      { href: '/five-boro-bike-tour/jaan.md', children: 'Jaan' },
      { href: '/five-boro-bike-tour/kevin.md', children: 'Kevin' },
      { href: '/five-boro-bike-tour/shelly.md', children: 'Shelly' },
      { href: '/five-boro-bike-tour/swapneel.md', children: 'Swapneel' },
      { href: '/five-boro-bike-tour/yili.md', children: 'Yili' },
      { href: '/five-boro-bike-tour/zixiao.md', children: 'Zixiao' },
    ]
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link}>
                    <a href={link.href}>{link.children}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            /* https://stackoverflow.com/questions/66898327/how-to-keep-footer-from-pushing-up-sticky-sidebar */
            position: sticky;
            top: var(--nav-height);
            height: calc(100vh - var(--nav-height));
            flex: 0 0 240px;
            overflow-y: auto;
            padding: 2rem 0 2rem 2rem;
          }
          h3 {
            font-weight: 500;
            margin: 0.5rem 0 0;
            padding-bottom: 0.5rem;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style-type: none;
            margin: 0 0 0.7rem 0.7rem;
            font-size: 14px;
            font-weight: 400;
          }
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active > a {
            text-decoration: underline;
          }
          @media screen and (max-width: 600px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}
