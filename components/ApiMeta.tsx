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

export interface ApiMetaProps {
  addedVersion?: string;
  deprecatedVersion?: string;
  stability?: Stability;
}

export function ApiMeta(props: ApiMetaProps) {
  return (
    <div className="api-meta">
      {(!!props.addedVersion || !!props.deprecatedVersion) && (
        <div className="api-meta-version">
          {!!props.addedVersion && (
            <span className="api-meta-version-added">
              v{props.addedVersion}
            </span>
          )}
          {!!props.deprecatedVersion && (
            <span className="api-meta-version-deprecated">
              v{props.deprecatedVersion}
            </span>
          )}
        </div>
      )}
      {!!props.stability && (
        <div
          className={`api-meta-stability api-meta-stability-${
            props.stability || ''
          }`}
        >
          Stability: {props.stability}
        </div>
      )}
    </div>
  );
}
