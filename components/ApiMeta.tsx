import './ApiMeta.scss';
/**
 * The Stability Index is learned from https://nodejs.org/api/documentation.html#stability-index

 */
export enum Stability {
  Deprecated = 'Deprecated', // The feature may emit warnings. Backward compatibility is not guaranteed.
  Experimental = 'Experimental', // The feature is not subject to semantic versioning rules
  Stable = 'Stable', // Compatibility with the npm ecosystem is a high priority.
  Legacy = 'Legacy', // Although this feature is unlikely to be removed and is still covered by semantic versioning guarantees, it is no longer actively maintained, and other alternatives are available.
}
export function ApiMeta(
  props: {
    addedVersion?: string;
    deprecatedVersion?: string;
    stability: Stability;
  } = {
    addedVersion: undefined,
    deprecatedVersion: undefined,
    stability: Stability.Stable,
  }
) {
  return (
    <div className="api-meta">
      <div className="api-meta-version">
        {!!props.addedVersion && <span>added in v{props.addedVersion}</span>}
        {!!props.deprecatedVersion && (
          <span>deprecated in v{props.addedVersion}</span>
        )}
      </div>
      <div className="api-meta-stability">Stability: {props.stability}</div>
    </div>
  );
}
