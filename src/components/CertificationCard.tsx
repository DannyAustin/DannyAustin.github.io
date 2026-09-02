import type { Certification } from "@/site.config";

export default function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  const { name, issuer, issueDate, expirationDate, credentialId, credentialUrl } =
    certification;

  return (
    <article className="flex flex-col gap-1.5 rounded-lg border border-neutral-200 bg-white p-5">
      <h2 className="font-semibold tracking-tight">{name}</h2>
      <p className="text-base text-neutral-700">{issuer}</p>
      {issueDate && (
        <p className="text-sm text-neutral-500">
          Issued {issueDate}
          {expirationDate && ` · Expires ${expirationDate}`}
        </p>
      )}
      {credentialId && (
        <p className="text-sm text-neutral-500">Credential ID: {credentialId}</p>
      )}
      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pt-1 text-sm text-accent hover:underline print:text-black"
        >
          Verify credential
        </a>
      )}
    </article>
  );
}
