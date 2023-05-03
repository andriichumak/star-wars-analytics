export const formatLargeNumbers = `[>=1000000000000]#,,,,.0 T;
[>=1000000000]#,,,.0 B;
[>=1000000]#,,.0 M;
[>=1000]#,.0 K;
[>=0]#,##0;
[<=-1000000000000]-#,,,,.0 T;
[<=-1000000000]-#,,,.0 B;
[<=-1000000]-#,,.0 M;
[<=-1000]-#,.0 K;
[<0]-#,##0`;

export const formatMeters = "#,##0 m";

export const formatMGLT = "#,##0 MGLT";

export const formatCredits = `[>=1000000000000]#,,,,.0 T credits;
[>=1000000000]#,,,.0 B credits;
[>=1000000]#,,.0 M credits;
[>=1000]#,.0 K credits;
[>=0]#,##0 credits;
[<=-1000000000000]-#,,,,.0 T;
[<=-1000000000]-#,,,.0 B;
[<=-1000000]-#,,.0 M;
[<=-1000]-#,.0 K;
[<0]-#,##0`;

export const formatSpeedAtm = "#,##0 kph";
