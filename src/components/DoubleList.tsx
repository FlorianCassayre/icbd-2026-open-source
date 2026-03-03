import * as React from 'react';

interface DoubleListItem {
  title: string;
  list: string[];
}

interface DoubleListProps {
  items: DoubleListItem[];
  fancy?: boolean;
  ordered?: boolean;
  swapped?: boolean;
}

export const DoubleList: React.FC<DoubleListProps> = ({ items, fancy, ordered, swapped }) => {
  const List = ordered ? 'ol' : 'ul';
  return (
    <div style={{ display: 'flex', flexDirection: swapped ? 'row-reverse' : undefined, width: '100%' }}>
      <div style={{ flex: 1 }}>
        <List>
          {items.map(({ title }, i) => (
            <li key={i} className="fragment fade-in-then-semi-out" data-fragment-index={i + 1}>
              <strong className={fancy ? 'fancy' : undefined}>{title}</strong>
            </li>
          ))}
        </List>
      </div>
      <div className="r-stack" style={{ flex: 1 }}>
        {items.map(({ list }, i) => (
          <ul key={i} className="fragment fade-in-then-out" data-fragment-index={i + 1} style={{ fontSize: '1.5rem' }}>
            {list.map((listItem, j) => (
              <li key={j}>{listItem}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
