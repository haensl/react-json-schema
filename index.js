import mimetypes from '@haensl/mimetypes';

const JSONSchema = ({ json = {} }) => {
  if (!json || !Object.keys(json).length) {
    return null;
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json)
      }}
      type={ mimetypes.jsonLd }
    />
  );
};

export default JSONSchema;
