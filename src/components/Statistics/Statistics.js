import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ data, title }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {data.map(data => (
          <li
            key={data.id}
            className={s.item}
            style={{ backgroundColor: [getRandomColor()] }}
          >
            <span className={s.label}>{data.label}</span>
            <span className={s.percentage}>{data.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
  title: PropTypes.string,
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
