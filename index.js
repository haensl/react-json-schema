import { jsonLd } from '@haensl/mimetypes';

const JSONSchema = ({ json = {} }) => {
  if (!json || !Object.keys(json).length) {
    return null;
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json)
      }}
      type={ jsonLd }
    />
  );
};

export default JSONSchema;
