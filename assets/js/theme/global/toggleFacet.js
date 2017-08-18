import svgIcon from './svgIcon';

export default function (event) {
  const $target = $(event.currentTarget);

  $target
    .parents('[data-facet-filter]')
    .children('[data-facet-filter-wrapper]')
    .toggleClass('is-open');

  if ($target.hasClass('is-open')) {
    $target.html(svgIcon('minus'));
  } else {
    $target.html(svgIcon('plus'));
  }

  $target.toggleClass('is-open');
}
